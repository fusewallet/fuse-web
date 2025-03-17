import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '../../lib/utils';

function Banner() {
    const [value, setValue] = useState<1 | 2>(1);

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [isIntersecting2, setIsIntersecting2] = useState(false);

    const dom = useRef<HTMLDivElement>(null);
    const dom2 = useRef<HTMLDivElement>(null);

    const observer = useMemo(
        () =>
            new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.target === dom.current) {
                        setIsIntersecting(entry.isIntersecting);
                    } else if (entry.target === dom2.current) {
                        setIsIntersecting2(entry.isIntersecting);
                    }
                });
            }),
        [],
    );

    useEffect(() => {
        if (dom.current) {
            observer.observe(dom.current);
        }
        if (dom2.current) {
            observer.observe(dom2.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [observer]);

    useEffect(() => {
        const toggleValue = () => {
            setValue((prevValue) => (prevValue === 1 ? 2 : 1));
        };

        const intervalId = setInterval(toggleValue, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="relative flex min-h-screen w-full max-w-screen items-center justify-center overflow-hidden">
                <div className="absolute z-10 flex h-full w-full max-w-[1364px] flex-col px-[20px] pt-[48px] md:flex-row md:px-[42px] md:pt-[94px]">
                    <div ref={dom} className="flex w-full flex-col justify-center pt-2 pb-6 md:h-full md:w-[538px]">
                        <div
                            className={cn(
                                'animate__animated text-[32px] leading-[42px] font-semibold text-white md:text-[55px] md:leading-[62px]',
                                isIntersecting ? 'animate__fadeInDown' : 'animate__fadeOutDown',
                            )}
                        >
                            Multi-chain protection, boundless security.
                        </div>
                        <div
                            className={cn(
                                'animate__animated mt-[10px] text-sm font-normal text-[#c8c8c8] md:mt-[20px] md:text-lg',
                                isIntersecting ? 'animate__fadeInDown' : 'animate__fadeOutDown',
                            )}
                        >
                            Manage your crypto assets, track balances, and analyze trends. Secure, convenient, and
                            efficient on-chain experience.
                        </div>
                        <div
                            className={cn(
                                'animate__animated mt-[20px] flex h-[50px] w-[260px] cursor-pointer items-center justify-center rounded-[63px] bg-[rgba(255,207,19,0.9)] duration-150 hover:bg-[rgba(255,207,19,1)] md:mt-[48px] md:h-[68px] md:w-[339px]',
                                isIntersecting ? 'animate__fadeInDown' : 'animate__fadeOutDown',
                            )}
                        >
                            <img
                                className="mr-[10px] inline-flex w-[32px] md:mr-[15px] md:w-[50px]"
                                src="/svg/google.svg"
                                alt=""
                            />
                            <div className="text-lg leading-normal font-medium text-black md:text-2xl">
                                Download for Chrome
                            </div>
                        </div>
                    </div>

                    <div
                        ref={dom2}
                        className="mb-6 flex min-w-[330px] flex-1 flex-shrink-0 items-center md:mb-0 md:ml-[122px]"
                    >
                        <div
                            className={cn(
                                'animate__animated relative flex h-full w-full overflow-hidden md:h-[550px]',
                                isIntersecting2 ? 'animate__fadeInRight' : 'animate__fadeOutRight',
                            )}
                        >
                            <div
                                className={cn(
                                    'absolute top-0 z-[2] h-full flex-shrink-0 duration-300',
                                    value === 1 && 'z-0 translate-x-[calc(100%-30px)] scale-90 transform',
                                )}
                            >
                                <img className="h-full" src="/images/banner-1.png" alt="" />
                            </div>
                            <div
                                className={cn(
                                    'absolute top-0 z-[2] h-full flex-shrink-0 duration-300',
                                    value === 2 && 'z-0 translate-x-[calc(100%-30px)] scale-90',
                                )}
                            >
                                <img className="h-full" src="/images/banner-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <img className="absolute top-0 right-0 h-full" src="/images/banner-bg.png" alt="" />
            </div>
        </>
    );
}

export default Banner;
