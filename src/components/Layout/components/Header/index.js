import className from 'classname';
import style from './Header.module.scss';

const cx = className(style);

function Header() {
    return (
        <header className={cx('wrappre')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
