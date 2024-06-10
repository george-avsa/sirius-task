import LoaderSvg from './../assets/loader.svg';

function Loader({
    isFullScreen,
}: {
    isFullScreen?: boolean
}) {
    return (
        <div className={`loader ${isFullScreen ? 'loader--full-sreen' : ''}`}>
            <div className='loader__spinner'>
                <LoaderSvg></LoaderSvg>
            </div>
        </div>
    );
}

export default Loader;