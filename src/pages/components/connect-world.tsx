import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '../../lib/utils';

function ConnectWorld() {
    // 为每个元素创建独立的可见性状态
    const [isIntersecting1, setIsIntersecting1] = useState(false);
    const [isIntersecting2, setIsIntersecting2] = useState(false);
    const [isIntersecting3, setIsIntersecting3] = useState(false);
    const [isIntersecting4, setIsIntersecting4] = useState(false);
    const [isIntersecting5, setIsIntersecting5] = useState(false);
    const [isIntersecting6, setIsIntersecting6] = useState(false);

    // 为每个元素创建引用
    const dom1 = useRef(null);
    const dom2 = useRef(null);
    const dom3 = useRef(null);
    const dom4 = useRef(null);
    const dom5 = useRef(null);
    const dom6 = useRef(null);

    // 创建 IntersectionObserver 实例
    const observer = useMemo(
        () =>
            new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    switch (entry.target) {
                        case dom1.current:
                            setIsIntersecting1(entry.isIntersecting);
                            break;
                        case dom2.current:
                            setIsIntersecting2(entry.isIntersecting);
                            break;
                        case dom3.current:
                            setIsIntersecting3(entry.isIntersecting);
                            break;
                        case dom4.current:
                            setIsIntersecting4(entry.isIntersecting);
                            break;
                        case dom5.current:
                            setIsIntersecting5(entry.isIntersecting);
                            break;
                        case dom6.current:
                            setIsIntersecting6(entry.isIntersecting);
                            break;
                        default:
                            break;
                    }
                });
            }),
        [],
    );

    // 在 useEffect 中观察每个元素
    useEffect(() => {
        if (dom1.current) observer.observe(dom1.current);
        if (dom2.current) observer.observe(dom2.current);
        if (dom3.current) observer.observe(dom3.current);
        if (dom4.current) observer.observe(dom4.current);
        if (dom5.current) observer.observe(dom5.current);
        if (dom6.current) observer.observe(dom6.current);

        return () => {
            observer.disconnect();
        };
    }, [observer]);

    return (
        <>
            <div className="flex w-full items-center justify-center overflow-hidden">
                <div
                    className="flex w-full max-w-[1364px] flex-col px-[20px] md:px-[42px]"
                    style={{
                        background: 'radial-gradient(100% 100% at 55% 0%, #100033 0%, #0A0600 49.6%)',
                    }}
                >
                    <div className="flex w-full items-center justify-center pt-[20px] text-[22px] font-semibold text-[#ffcf13] md:pt-[38px] md:text-[40px]">
                        Connect Your On-Chain World
                    </div>

                    <div className="mt-[20px] flex w-full flex-col gap-[20px] md:mt-[47px] md:gap-[30px]">
                        <div className="flex w-full flex-col gap-[20px] md:flex-row md:gap-[30px]">
                            <div
                                ref={dom1}
                                className={cn(
                                    'animate__animated flex w-full flex-col rounded-[20px] border border-[#323232] bg-gradient-to-br from-[#00102b] to-[#0a0600] px-[20px] pt-[20px] md:h-[622px] md:w-[480px] md:rounded-[30px] md:px-[40px] md:pt-[40px]',
                                    isIntersecting1 ? 'animate__fadeInLeft' : 'animate__fadeOutLeft',
                                )}
                            >
                                <div
                                    className={cn(
                                        'animate__animated text-2xl font-normal text-[#eeeeee] md:text-4xl',
                                        isIntersecting1 ? 'animate__fadeIn' : 'animate__fadeOut',
                                    )}
                                >
                                    Multiple chains, one wallet.
                                </div>

                                <div
                                    className={cn(
                                        'animate__animated mt-[10px] text-sm font-normal text-[#999999] md:mt-[20px] md:text-base',
                                        isIntersecting1 ? 'animate__fadeIn' : 'animate__fadeOut',
                                    )}
                                >
                                    IC Chain, Ethereum Chain, and BNB Chain are now supported.
                                </div>
                                <img
                                    className={cn(
                                        'animate__animated mt-[30px] w-full md:mt-auto',
                                        isIntersecting1 ? 'animate__fadeIn' : 'animate__fadeOut',
                                    )}
                                    src="/images/connect-world-1.png"
                                    alt=""
                                />
                            </div>

                            <div className="flex flex-1 flex-col gap-[20px] md:gap-[30px]">
                                <div
                                    ref={dom2}
                                    className={cn(
                                        'animate__animated flex w-full flex-col rounded-[20px] border border-[#323232] bg-gradient-to-b from-[#0a0600] to-[#1e0b31] px-[20px] pt-[20px] md:flex-1 md:flex-row md:rounded-[30px] md:px-[40px] md:pt-[40px]',
                                        isIntersecting2 ? 'animate__fadeInRight' : 'animate__fadeOutRight',
                                    )}
                                >
                                    <img
                                        className={cn(
                                            'animate__animated order-2 mt-[30px] flex w-full md:order-1 md:mt-0 md:w-[300px]',
                                            isIntersecting2 ? 'animate__fadeIn' : 'animate__fadeOut',
                                        )}
                                        src="/images/connect-world-2.png"
                                        alt=""
                                    />
                                    <div className="order-1 flex flex-col md:order-2 md:ml-[58px]">
                                        <div
                                            className={cn(
                                                'animate__animated text-2xl font-normal text-[#eeeeee] md:text-4xl',
                                                isIntersecting2 ? 'animate__fadeIn' : 'animate__fadeOut',
                                            )}
                                        >
                                            Automatically optimize for the best exchange rate
                                        </div>
                                        <div
                                            className={cn(
                                                'animate__animated mt-[10px] line-clamp-2 text-sm font-normal text-[#999999] md:mt-[23px] md:text-base',
                                                isIntersecting2 ? 'animate__fadeIn' : 'animate__fadeOut',
                                            )}
                                        >
                                            Get the best rates and save on transaction fees.
                                        </div>
                                    </div>
                                </div>

                                <div
                                    ref={dom3}
                                    className={cn(
                                        'animate__animated flex flex-1 flex-col gap-[20px] md:gap-[30px]',
                                        isIntersecting3 ? 'animate__fadeInRight' : 'animate__fadeOutRight',
                                    )}
                                >
                                    <div className="flex w-full flex-col rounded-[20px] border border-[#323232] bg-gradient-to-br from-[#0a0600] to-[#0a2600] px-[20px] pt-[13px] md:flex-1 md:flex-row md:rounded-[30px] md:px-[40px]">
                                        <div className="mr-[20px] flex flex-col md:mr-[58px]">
                                            <div
                                                className={cn(
                                                    'animate__animated pt-[5px] text-2xl font-normal text-[#eeeeee] md:pt-[28px] md:text-4xl',
                                                    isIntersecting3 ? 'animate__fadeIn' : 'animate__fadeOut',
                                                )}
                                            >
                                                Privacy and security are paramount
                                            </div>
                                            <div
                                                className={cn(
                                                    'animate__animated mt-[5px] line-clamp-2 text-sm font-normal text-[#999999] md:mt-[23px] md:text-base',
                                                    isIntersecting3 ? 'animate__fadeIn' : 'animate__fadeOut',
                                                )}
                                            >
                                                Users have the exclusive right and control of their cryptocurrency
                                                assets.
                                            </div>
                                        </div>
                                        <img
                                            className={cn(
                                                'animate__animated mt-[30px] flex w-full md:mt-0 md:w-[260px]',
                                                isIntersecting3 ? 'animate__fadeIn' : 'animate__fadeOut',
                                            )}
                                            src="/images/connect-world-3.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full flex-col gap-[20px] md:flex-row md:gap-[30px]">
                            <div
                                ref={dom4}
                                className={cn(
                                    'animate__animated flex w-full flex-col rounded-[20px] border border-[#323232] bg-gradient-to-bl from-[#0a0600] to-[#1b1000] px-[20px] pt-[20px] md:h-[620px] md:flex-1 md:rounded-[30px] md:px-[40px] md:pt-[40px]',
                                    isIntersecting4 ? 'animate__fadeInLeft' : 'animate__fadeOutLeft',
                                )}
                            >
                                <div
                                    className={cn(
                                        'animate__animated text-2xl font-normal text-[#eeeeee] md:text-4xl',
                                        isIntersecting4 ? 'animate__fadeIn' : 'animate__fadeOut',
                                    )}
                                >
                                    Multiple accounts, all assets in one place
                                </div>
                                <div
                                    className={cn(
                                        'animate__animated mt-[20px] text-base font-normal text-[#999999]',
                                        isIntersecting4 ? 'animate__fadeIn' : 'animate__fadeOut',
                                    )}
                                >
                                    Import unlimited accounts and switch between them seamlessly.
                                </div>
                                <img
                                    className={cn(
                                        'animate__animated mt-auto flex w-full',
                                        isIntersecting4 ? 'animate__fadeIn' : 'animate__fadeOut',
                                    )}
                                    src="/images/connect-world-4.png"
                                    alt=""
                                />
                            </div>

                            <div
                                ref={dom5}
                                className={cn(
                                    'animate__animated flex w-full flex-col rounded-[20px] border border-[#323232] bg-gradient-to-bl from-[#001719] via-[#0a0600] to-[#0a0600] px-[20px] pt-[20px] md:h-[620px] md:flex-1 md:rounded-[30px] md:px-[40px] md:pt-[40px]',
                                    isIntersecting5 ? 'animate__fadeInRight' : 'animate__fadeOutRight',
                                )}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConnectWorld;
