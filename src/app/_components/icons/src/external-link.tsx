import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconProp } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconProp) {
    return (
        <BaseIcon {...props}>
            <path d='m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z' />
            <path d='M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z' />
        </BaseIcon>
    );
}
