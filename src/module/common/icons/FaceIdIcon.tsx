import { SvgIcon, SvgIconProps } from "@peersyst/react-native-components";
import { Path } from "react-native-svg";

export function FaceIdIcon(props: Omit<SvgIconProps, "children">): JSX.Element {
    return (
        <SvgIcon
            // @ts-ignore
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            {...{ testID: "FaceIdIcon" }}
        >
            <Path
                d="M6.220 2.040 C 5.424 2.074,4.907 2.163,4.460 2.341 C 3.682 2.652,3.020 3.224,2.587 3.959 C 2.200 4.617,2.094 5.096,2.035 6.460 C 1.982 7.679,2.004 8.248,2.112 8.488 C 2.264 8.825,2.530 8.970,3.000 8.970 C 3.473 8.970,3.735 8.827,3.893 8.480 C 3.969 8.315,3.978 8.192,4.005 6.980 C 4.040 5.398,4.061 5.277,4.388 4.811 C 4.495 4.658,4.658 4.495,4.811 4.388 C 5.277 4.061,5.398 4.040,6.980 4.005 C 8.192 3.978,8.315 3.969,8.480 3.893 C 8.827 3.735,8.970 3.473,8.970 3.000 C 8.970 2.526,8.826 2.265,8.480 2.107 C 8.324 2.037,8.208 2.024,7.620 2.017 C 7.246 2.012,6.616 2.022,6.220 2.040 M15.756 2.041 C 15.261 2.124,15.030 2.430,15.030 3.002 C 15.029 3.477,15.184 3.751,15.541 3.905 C 15.675 3.964,15.903 3.979,17.020 4.004 C 18.609 4.039,18.762 4.066,19.199 4.395 C 19.436 4.574,19.679 4.857,19.787 5.080 C 19.940 5.398,19.966 5.637,19.996 6.980 C 20.022 8.193,20.031 8.315,20.107 8.480 C 20.266 8.827,20.526 8.970,21.002 8.970 C 21.219 8.970,21.355 8.948,21.482 8.891 C 21.836 8.732,21.955 8.499,21.986 7.905 C 22.021 7.254,21.934 5.518,21.846 5.099 C 21.530 3.599,20.401 2.470,18.901 2.154 C 18.348 2.038,16.225 1.961,15.756 2.041 M7.240 7.045 C 6.960 7.092,6.746 7.234,6.631 7.450 C 6.545 7.611,6.539 7.670,6.527 8.620 C 6.511 9.784,6.537 9.970,6.748 10.204 C 7.084 10.576,7.916 10.576,8.252 10.204 C 8.463 9.970,8.489 9.784,8.473 8.620 C 8.461 7.670,8.455 7.611,8.369 7.450 C 8.227 7.184,8.038 7.084,7.560 7.022 C 7.505 7.014,7.361 7.025,7.240 7.045 M12.240 7.045 C 11.960 7.092,11.746 7.234,11.631 7.450 C 11.541 7.618,11.540 7.643,11.520 9.440 C 11.498 11.427,11.506 11.367,11.260 11.519 C 11.194 11.559,11.032 11.605,10.900 11.621 C 10.289 11.692,10.030 11.984,10.030 12.602 C 10.029 13.281,10.342 13.574,11.060 13.569 C 12.159 13.561,13.176 12.726,13.419 11.630 C 13.474 11.382,13.482 11.073,13.472 9.480 C 13.460 7.634,13.459 7.619,13.369 7.450 C 13.227 7.184,13.038 7.084,12.560 7.022 C 12.505 7.014,12.361 7.025,12.240 7.045 M16.240 7.045 C 15.960 7.092,15.746 7.234,15.631 7.450 C 15.545 7.611,15.539 7.670,15.527 8.620 C 15.511 9.784,15.537 9.970,15.748 10.204 C 16.084 10.576,16.916 10.576,17.252 10.204 C 17.463 9.970,17.489 9.784,17.473 8.620 C 17.461 7.670,17.455 7.611,17.369 7.450 C 17.227 7.184,17.038 7.084,16.560 7.022 C 16.505 7.014,16.361 7.025,16.240 7.045 M8.369 14.239 C 8.164 14.332,7.841 14.653,7.742 14.862 C 7.650 15.055,7.651 15.347,7.745 15.544 C 7.827 15.719,8.205 16.107,8.551 16.373 C 9.289 16.940,10.172 17.313,11.139 17.467 C 11.626 17.544,12.624 17.520,13.080 17.420 C 14.084 17.200,15.050 16.691,15.774 16.001 C 16.086 15.704,16.240 15.439,16.240 15.200 C 16.240 14.749,15.651 14.160,15.200 14.160 C 14.983 14.160,14.760 14.279,14.415 14.581 C 13.674 15.227,13.013 15.505,12.120 15.548 C 11.121 15.595,10.255 15.277,9.476 14.575 C 9.014 14.159,8.733 14.074,8.369 14.239 M2.756 15.040 C 2.243 15.128,2.050 15.402,2.014 16.095 C 1.979 16.746,2.066 18.482,2.154 18.901 C 2.470 20.401,3.599 21.530,5.099 21.846 C 5.519 21.934,7.255 22.021,7.909 21.986 C 8.688 21.945,8.970 21.683,8.970 21.000 C 8.970 20.527,8.827 20.265,8.480 20.107 C 8.315 20.031,8.193 20.022,6.980 19.996 C 5.391 19.961,5.239 19.934,4.801 19.605 C 4.564 19.426,4.321 19.143,4.213 18.920 C 4.060 18.602,4.034 18.362,4.004 17.020 C 3.972 15.588,3.959 15.509,3.731 15.271 C 3.546 15.078,3.122 14.977,2.756 15.040 M20.756 15.040 C 20.421 15.098,20.221 15.249,20.095 15.541 C 20.036 15.675,20.021 15.903,19.996 17.020 C 19.966 18.362,19.940 18.602,19.787 18.920 C 19.679 19.143,19.436 19.426,19.199 19.605 C 18.761 19.934,18.609 19.961,17.020 19.996 C 15.807 20.022,15.685 20.031,15.520 20.107 C 15.173 20.266,15.030 20.526,15.030 21.002 C 15.030 21.219,15.052 21.355,15.109 21.482 C 15.332 21.978,15.659 22.043,17.520 21.965 C 18.627 21.918,19.051 21.854,19.541 21.659 C 20.496 21.277,21.277 20.496,21.659 19.541 C 21.854 19.051,21.918 18.627,21.965 17.520 C 22.032 15.940,21.990 15.541,21.731 15.271 C 21.546 15.078,21.122 14.977,20.756 15.040"
                stroke="none"
            />
        </SvgIcon>
    );
}
