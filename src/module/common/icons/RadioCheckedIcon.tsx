import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function RadioCheckedIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "RadioCheckedIcon" }}
        >
            <Path
                d="M11.240 0.023 C 11.163 0.032,10.902 0.059,10.660 0.083 C 9.176 0.231,7.458 0.780,6.146 1.527 C 2.324 3.701,0.001 7.660,0.001 12.000 C 0.001 16.422,2.458 20.510,6.371 22.599 C 7.534 23.220,8.918 23.671,10.320 23.886 C 10.814 23.962,11.063 23.975,12.000 23.975 C 12.941 23.975,13.184 23.962,13.680 23.885 C 16.154 23.502,18.229 22.525,20.057 20.884 C 21.855 19.268,23.131 17.093,23.697 14.680 C 23.918 13.738,23.975 13.186,23.975 12.000 C 23.975 10.757,23.915 10.221,23.657 9.169 C 22.468 4.316,18.472 0.747,13.500 0.096 C 13.074 0.040,11.524 -0.010,11.240 0.023 M12.564 6.039 C 14.921 6.269,16.913 7.837,17.671 10.060 C 18.168 11.517,18.068 13.251,17.410 14.580 C 16.550 16.316,15.056 17.478,13.160 17.885 C 12.554 18.015,11.446 18.015,10.840 17.885 C 7.802 17.233,5.774 14.537,6.036 11.500 C 6.161 10.053,6.718 8.838,7.731 7.805 C 9.008 6.503,10.757 5.864,12.564 6.039 "
                stroke="none"
                fillRule="evenodd"
            ></Path>
        </SvgIcon>
    );
}