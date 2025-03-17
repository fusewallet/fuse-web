import { useEffect, useState } from 'react';

import { cn } from '../../lib/utils';

function ConnectWorld() {
    return (
        <>
            <div className="flex w-full items-center justify-center">
                <div
                    className="flex w-full max-w-[1430px] flex-col px-[20px] md:px-[42px]"
                    style={{
                        background: 'radial-gradient(100% 100% at 55% 0%, #100033 0%, #0A0600 49.6%)',
                    }}
                >
                    <div className="flex w-full items-center justify-center pt-[20px] text-[22px] font-semibold text-[#ffcf13] md:pt-[38px] md:text-[40px]">
                        Connect Your On-Chain World
                    </div>
                    <div className="mt-[20px] flex w-full flex-col gap-[20px] md:mt-[47px] md:gap-[30px]">
                        <div className="flex w-full flex-col gap-[20px] md:flex-row md:gap-[30px]">
                            <div className="flex w-full flex-col border md:h-[622px] md:w-[480px]">1</div>
                            <div className="flex flex-1 flex-col gap-[20px] md:gap-[30px]">
                                <div className="flex w-full border md:flex-1">2</div>
                                <div className="flex w-full border md:flex-1">3</div>
                            </div>
                        </div>
                        <div className="flex w-full">1</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConnectWorld;
