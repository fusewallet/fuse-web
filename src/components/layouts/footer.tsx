import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router';

import { cn } from '../../lib/utils';
import Icon from '../icon';

function Footer() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const dom = useRef<HTMLDivElement>(null);

    const observer = useMemo(
        () =>
            new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.target === dom.current) {
                        setIsIntersecting(entry.isIntersecting);
                    }
                });
            }),
        [],
    );

    useEffect(() => {
        if (dom.current) {
            observer.observe(dom.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [observer]);

    return (
        <div className="flex w-full items-center justify-center bg-transparent duration-75">
            <div
                ref={dom}
                className="flex w-full max-w-[1512px] flex-col items-center"
                style={{
                    background:
                        'radial-gradient(100% 100% at 50% 100%, rgba(255, 120, 38, 0.32) 0%, rgba(10, 6, 0, 0.26) 48.5%, rgba(10, 6, 0, 0.32) 100%)',
                }}
            >
                <div
                    className="flex w-full max-w-[1364px] flex-col items-center justify-center px-[20px] pt-[30px] pb-[88px] md:px-[42px] md:pt-[88px] md:pb-[190px]"
                    style={{
                        background:
                            'radial-gradient(100% 100% at 50% 100%, rgba(83, 18, 92, 0.6) 0%, rgba(10, 6, 0, .5) 48.5%, rgba(10, 6, 0, 0) 100%)',
                    }}
                >
                    <div
                        className={cn(
                            'animate__animated justify-start text-center text-[32px] font-medium text-[#ffcf13] md:text-[64px]',
                            isIntersecting ? 'animate__fadeInDown' : 'animate__fadeOutDown',
                        )}
                    >
                        Download <img className="inline-flex w-[32px] md:w-[68px]" src="/svg/logo2.svg" alt="" /> FUSE{' '}
                        <br />
                        to get started
                    </div>

                    <div
                        className={cn(
                            'animate__animated mt-[38px] flex h-[50px] w-[260px] cursor-pointer items-center justify-center rounded-[63px] bg-[rgba(255,207,19,0.9)] duration-150 hover:bg-[rgba(255,207,19,1)] md:mt-[72px] md:h-[68px] md:w-[339px]',
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
                <div className="flex h-[60px] w-full max-w-[1364px] items-center justify-between px-[20px] md:h-[76px] md:px-[42px]">
                    <div className="flex items-center">
                        <img
                            className="mr-[10px] inline-flex w-[16px] md:mr-[15px] md:w-[31px]"
                            src="/svg/logo2.svg"
                            alt=""
                        />
                        <div className="text-sm text-[#eeeeee] md:text-base">Copyright © FUSE 2025</div>
                    </div>
                    <div className="flex items-center gap-x-[22px]">
                        <Link to="/" className="flex items-center">
                            <Icon className="mr-[6px] h-[18px] w-[18px]" name="icon-doc"></Icon>
                            <p className="text-base font-medium text-white">docs</p>
                        </Link>
                        <Link to="/" className="flex items-center">
                            <Icon className="h-[15px] w-[15px]" name="icon-x"></Icon>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
