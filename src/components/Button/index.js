import classNames from 'classnames/bind';
import { Wrapper } from '../Layout/components/Popper';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);

function Button({ to, href, Children, onclick }) {
    let Comp = 'button';

    const className = cx(Wrapper);
    return <Comp className={className}></Comp>;
}
export default Button;
