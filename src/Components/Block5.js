import React from 'react'
import block51 from '../images/block51.avif'
import block52 from '../images/block52.avif'
import block53 from '../images/block53.avif'
import block54 from '../images/block54.avif'
import heading1 from '../images/blockh1.png'
import block56 from '../images/block56.png'
import block57 from '../images/block57.avif'
import block58 from '../images/block58.avif'
import block59 from '../images/block59.avif'
import heading2 from '../images/block5h2.png'
import block61 from '../images/block511.avif'
import block62 from '../images/block512.avif'
import heading3 from '../images/block5h3.avif'

function Block5(){
    return(
        <div className='py-2' style={{backgroundColor: "#F7F7FA"}}>
        <div className='fluid-container my-4 mx-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={heading1} width="100%"/>
                    <div className='row'>
                        <div className="col-md-6 mb-3">
                            <img src={block51} width="100%"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <img src={block52} width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <img src={block53} width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <img src={block54} width="100%"/>
                        </div>
                    </div>
                </div>

                <div className='col-md-4' style={{backgroundColor: "#fff0be"}}>
                    <img src={heading2} width="100%"/>
                    <div className='row'>
                        <div className="col-md-6 mb-3">
                            <img src={block56} width="100%"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <img src={block57} width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <img src={block58} width="100%"/>
                        </div>
                        <div className="col-md-6">
                            <img src={block59} width="100%"/>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <img src={heading3} width="100%"/>
                    <div className='row'>
                        <div className="col-md-12 mb-3">
                            <img src={block61} width="100%"/>
                        </div>
                        <div className="col-md-12">
                            <img src={block62} width="100%"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <h4 className='mx-3 fw-bold'>Recommended for you</h4>
        </div>
    )
}

export default Block5