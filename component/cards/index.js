import './style.css';
function Cards (){
    return (
        <div>
            
            <div id='cardsDiv'>
            <div id='card1'>
                <div id='card1Text'>
                <span className='blueColor'>World</span>
                <h2>Featured post</h2>
                <span className='date'>Nov 12</span>
                <p>This is a wider card with supporting test <br /> before as a natural lead-in to additional <br /> content..</p>
            <span className='blueColor'>Continue reading</span>
            </div>
           <a href=""> <div className='cardThumbnail'>
           <p> Thumbnail</p>
            </div></a>
            </div>

            {/* card2 code */}

            <div id='card2'>
                <div id='card2Text'>
                <span id='greenColor'>Design</span>
                <h2>Post title</h2>
                <span className='date'>Nov 11</span>
                <p>This is a wider card with supporting test <br /> before as a natural lead-in to additional <br /> content..</p>
            <span className='blueColor'>Continue reading</span>
            </div>
           <a href=""> <div className='cardThumbnail'>
           <p> Thumbnail</p>
            </div></a>
            </div>


            </div>
        </div>
    )
}

export default Cards;