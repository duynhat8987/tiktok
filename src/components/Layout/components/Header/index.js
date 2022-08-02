import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';
import styles from './Header.module.scss';
import images from '../../../../assets/images/logo.svg';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('inner')}>
                    <img src={images} alt="Tiktok" />
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>Ket qua</PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Hãy bấm vào đây " spellCheck={false} />
                            {/* <div className={cx('component-close')}>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading ')} icon={faSpinner} />
                    </div> */}

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                    <div className={cx('actions')}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
