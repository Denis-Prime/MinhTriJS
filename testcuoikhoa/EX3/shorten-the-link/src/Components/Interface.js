import "./Interface.css"
import React, {useEffect, useState} from 'react'
export const Interface = () => {
    const [value, SetValue]= useState('')
    const [LinkType,SetLinkType ] = useState(1)
    const [Result, SetResult] = useState('')

    console.log(Result);

    const handleOnChange = (event)=>{
        SetValue(event.target.value)
    }
    const handleOnclick = (event)=>{
        let urlNeedToBeShortened = event.target.parentElement.children[0].value;
        let url = `https://api.shrtco.de/v2/shorten?url=${urlNeedToBeShortened}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(LinkType ===1) SetResult(data.result.full_short_link);
            else if(LinkType ===2) SetResult(data.result.full_short_link2);
            else SetResult(data.result.full_short_link3);
        });
        
    }
    const handleChoosetype = (event)=>{
        if(event.target.name === "type1") {
            
            event.target.className = event.target.className+=" changecolor"
            event.target.parentElement.children[1].className = event.target.parentElement.children[1].className.replace("changecolor","")
            event.target.parentElement.children[2].className = event.target.parentElement.children[2].className.replace("changecolor","")

            SetLinkType(1)
        }
        else if (event.target.name === "type2"){
            event.target.className = event.target.className+=" changecolor"
            event.target.parentElement.children[0].className = event.target.parentElement.children[0].className.replace("changecolor","")
            event.target.parentElement.children[2].className = event.target.parentElement.children[2].className.replace("changecolor","")
            SetLinkType(2)
        }
        else if(event.target.name === "type3"){
            event.target.className = event.target.className+=" changecolor"
            event.target.parentElement.children[0].className = event.target.parentElement.children[0].className.replace("changecolor","")
            event.target.parentElement.children[1].className = event.target.parentElement.children[1].className.replace("changecolor","")
            SetLinkType(3)
        }
    }


    return (
        <div className="contain">
            <h1 className="title">The privacy-friendly URL Shortener</h1>
            <div className="main">
                <div className="title-main">Link Shortener</div>
                <div className="row-input">Enter a link: <input className="inp-link" value={value} onChange={handleOnChange}></input> <button className="btn" onClick={handleOnclick}>Shorten</button></div>
                <div className="row-choose-link-type"> <button className="linktype1" name="type1" onClick={handleChoosetype}>shrtco.de</button> <button className="linktype2" name="type2" onClick={handleChoosetype}>9qr.de</button>  <button className="linktype3" name="type3" onClick={handleChoosetype}>shiny.link</button></div>
                <div>With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link.</div>
                <div className="result">
                    <nav>
                        <h4>link will create in bottom, please copy and paste in new tab</h4>
                        <h2>{Result}</h2>
                    </nav>
                </div>
            </div>
        </div>
    )
}
