import { Link } from 'react-router-dom';

const Forbidden = () => {
    return (
        <>
            <div className='container-fluid mb-5 mt-5'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-xl-12 mb-4'>
                        <div className='card border-0 shadow'>
                            <div className='card-body text-center'>
                                <img src='/src/assets/img/403-Forbidden2.jpg' className='mt-5 mb-3' width='400' />
                                <h2>Access Denied!</h2>
                                <Link to='/' className='btn btn-md btn-tertiary mt-3'>
                                    <i className='fa fa-long-arrow-alt-left me-2'></i> Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forbidden;
