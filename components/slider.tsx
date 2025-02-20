'use client';

import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export default function Slider({
  images,
  className,
}: {
  images: any[];
  className?: string;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className={`relative ${className}`}>
        <div ref={sliderRef} className='keen-slider h-full w-full'>
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`keen-slider__slide number-slide${index + 1} relative aspect-[1920/1280] lg:aspect-auto`}
            >
              <Image
                src={image}
                alt={`V Transfer Services`}
                fill
                sizes='(max-width: 1024px) 100vw, 70vw'
                priority={index === 0}
                className='object-cover'
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? 'fill-[rgba(255, 255, 255, 0.5)]' : '';

  return (
    <svg
      onClick={props.onClick}
      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 absolute top-1/2 -translate-y-1/2 cursor-pointer bg-white/50 rounded-full p-1  ${
        props.left ? 'left-4 sm:left-6 lg:left-8' : 'left-auto right-4 sm:right-6 lg:right-8'
      } ${disabled}`}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {props.left && <path d='m15 18-6-6 6-6' />}

      {!props.left && <path d='m9 18 6-6-6-6' />}
    </svg>
  );
}
