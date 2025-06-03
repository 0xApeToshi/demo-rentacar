import { useState, useEffect, useRef, MouseEvent } from "react";

type LegendValue = string;

interface RangeSliderProps {
    initialMin?: LegendValue;
    initialMax?: LegendValue;
    onChange?: (range: { min: LegendValue; max: LegendValue }) => void;
}

function RangeSlider({ initialMin, initialMax, onChange }: RangeSliderProps) {
    const legendValues: LegendValue[] = ["12€", "23€", "35€", "124€"];

    const trackWidth: number = 215;
    const trackHeight: number = 9;
    const handleRadius: number = 12;

    const calculatePositions = (): number[] => {
        const positions: number[] = [];
        const segments = legendValues.length - 1;

        for (let i = 0; i < legendValues.length; i++) {
            positions.push((i * trackWidth) / segments);
        }

        return positions;
    };

    const positions: number[] = calculatePositions();

    const initialLeftPos = initialMin
        ? positions[legendValues.indexOf(initialMin)]
        : positions[0];
    const initialRightPos = initialMax
        ? positions[legendValues.indexOf(initialMax)]
        : positions[positions.length - 1];

    const [leftHandlePos, setLeftHandlePos] = useState<number>(initialLeftPos);
    const [rightHandlePos, setRightHandlePos] =
        useState<number>(initialRightPos);

    const [rangeValues, setRangeValues] = useState<{
        min: LegendValue;
        max: LegendValue;
    }>({
        min: initialMin || legendValues[0],
        max: initialMax || legendValues[legendValues.length - 1],
    });

    const leftDragging = useRef<boolean>(false);
    const rightDragging = useRef<boolean>(false);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const leftNodeIndex = useRef<number>(
        initialMin ? legendValues.indexOf(initialMin) : 0
    );
    const rightNodeIndex = useRef<number>(
        initialMax ? legendValues.indexOf(initialMax) : legendValues.length - 1
    );

    const findClosestPosition = (
        currentPos: number
    ): { position: number; index: number } => {
        let closestPos: number = positions[0];
        let closestIndex: number = 0;
        let minDistance: number = Math.abs(currentPos - positions[0]);

        for (let i = 1; i < positions.length; i++) {
            const distance: number = Math.abs(currentPos - positions[i]);
            if (distance < minDistance) {
                minDistance = distance;
                closestPos = positions[i];
                closestIndex = i;
            }
        }

        return { position: closestPos, index: closestIndex };
    };

    const handleMouseDown = (
        e: MouseEvent<HTMLDivElement>,
        handle: "left" | "right"
    ): void => {
        e.preventDefault();
        if (handle === "left") {
            leftDragging.current = true;
        } else {
            rightDragging.current = true;
        }
    };

    const updateHandlePosition = (clientX: number): void => {
        if (!sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        let newPos = clientX - rect.left;

        newPos = Math.max(0, Math.min(newPos, trackWidth));

        if (leftDragging.current) {
            if (newPos < rightHandlePos - handleRadius) {
                setLeftHandlePos(newPos);
            } else {
                setLeftHandlePos(rightHandlePos - handleRadius);
            }
        }

        if (rightDragging.current) {
            if (newPos > leftHandlePos + handleRadius) {
                setRightHandlePos(newPos);
            } else {
                setRightHandlePos(leftHandlePos + handleRadius);
            }
        }
    };

    const handleMouseUp = (): void => {
        if (leftDragging.current) {
            const { position, index } = findClosestPosition(leftHandlePos);

            if (index < rightNodeIndex.current) {
                setLeftHandlePos(position);
                leftNodeIndex.current = index;
                setRangeValues((prev) => ({
                    ...prev,
                    min: legendValues[index],
                }));
            } else {
                const maxValidIndex = rightNodeIndex.current - 1;
                if (maxValidIndex >= 0) {
                    setLeftHandlePos(positions[maxValidIndex]);
                    leftNodeIndex.current = maxValidIndex;
                    setRangeValues((prev) => ({
                        ...prev,
                        min: legendValues[maxValidIndex],
                    }));
                } else {
                    setLeftHandlePos(positions[0]);
                    leftNodeIndex.current = 0;
                    setRangeValues((prev) => ({
                        ...prev,
                        min: legendValues[0],
                    }));
                }
            }
        }

        if (rightDragging.current) {
            const { position, index } = findClosestPosition(rightHandlePos);

            if (index > leftNodeIndex.current) {
                setRightHandlePos(position);
                rightNodeIndex.current = index;
                setRangeValues((prev) => ({
                    ...prev,
                    max: legendValues[index],
                }));
            } else {
                const minValidIndex = leftNodeIndex.current + 1;
                if (minValidIndex < positions.length) {
                    setRightHandlePos(positions[minValidIndex]);
                    rightNodeIndex.current = minValidIndex;
                    setRangeValues((prev) => ({
                        ...prev,
                        max: legendValues[minValidIndex],
                    }));
                } else {
                    const lastIndex = positions.length - 1;
                    setRightHandlePos(positions[lastIndex]);
                    rightNodeIndex.current = lastIndex;
                    setRangeValues((prev) => ({
                        ...prev,
                        max: legendValues[lastIndex],
                    }));
                }
            }
        }

        leftDragging.current = false;
        rightDragging.current = false;
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            if (leftDragging.current || rightDragging.current) {
                updateHandlePosition(e.clientX);
            }
        };

        document.addEventListener(
            "mousemove",
            handleMouseMove as unknown as EventListener
        );
        document.addEventListener(
            "mouseup",
            handleMouseUp as unknown as EventListener
        );

        return () => {
            document.removeEventListener(
                "mousemove",
                handleMouseMove as unknown as EventListener
            );
            document.removeEventListener(
                "mouseup",
                handleMouseUp as unknown as EventListener
            );
        };
    }, [leftHandlePos, rightHandlePos]);

    useEffect(() => {
        if (onChange) {
            onChange(rangeValues);
        }
    }, [rangeValues, onChange]);

    return (
        <div className="relative px-[8px] py-[12px] w-full flex flex-col">
            <div className="relative" style={{ width: trackWidth }}>
                {legendValues.map((value, index) => (
                    <div
                        key={index}
                        className="absolute transform -translate-x-1/2 text-sm text-base-black leading-[150%]"
                        style={{
                            left: positions[index],
                            top: 8,
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <div className="relative mt-8" ref={sliderRef}>
                <div
                    className="relative h-[9px] bg-gray-300 rounded-full"
                    style={{ width: trackWidth }}
                >
                    <div
                        className="absolute h-[9px] bg-secondary-300 rounded-full"
                        style={{
                            left: leftHandlePos,
                            width: rightHandlePos - leftHandlePos,
                        }}
                    />

                    <div
                        className="absolute w-[12px] h-[12px] bg-base border-[3px] border-secondary-400 rounded-full shadow transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{
                            left: leftHandlePos,
                            top: trackHeight / 2,
                            touchAction: "none",
                        }}
                        onMouseDown={(e) => handleMouseDown(e, "left")}
                    />

                    <div
                        className="absolute w-[12px] h-[12px] bg-base border-[3px] border-secondary-400 rounded-full shadow transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        style={{
                            left: rightHandlePos,
                            top: trackHeight / 2,
                            touchAction: "none",
                        }}
                        onMouseDown={(e) => handleMouseDown(e, "right")}
                    />
                </div>
            </div>
        </div>
    );
}

export default RangeSlider;
