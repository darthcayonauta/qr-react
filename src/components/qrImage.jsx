import React from "react";
import {useState,useEffect} from "react";
import  QRCode  from 'qrcode';

const QrImage = ( {text} )=>{

const [src,setSrc] = useState('');

const show = ()=>{
    QRCode.toDataURL( text )
        .then((data) => {
            setSrc( data)
        } )
};

useEffect( ()=>{
    show();
},[] );
    return (<div>
                <img src={src} />
            </div>)
}

export default QrImage;