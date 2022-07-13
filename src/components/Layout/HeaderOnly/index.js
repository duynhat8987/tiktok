import Header from '../components/Header';

function DefaultLayout({ Children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{Children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
