
const React = require('react')
const Def = require('../default')

function home () {
    return (
      
      <Def>
         <main>
         <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

    <h1>HOME</h1>
    <div>
      <img src="./images/chiafruit.jpg" alt="Chia Fruit Shake" />
      <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>
      </Def>
      
      
      
      
      
      )
    }  
    
    function index (data) {
      let placesFormatted = data.places.map((place) => {
        return (
          <div>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name}/>
          </div>
        )
      })
      return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
             {/* let places = [{
              name: 'H-Thai-ML',
              city: 'Seattle',
              state: 'WA',
              cuisines: 'Thai, Pan-Asian',
              pic: 'http://placekitten.com/250/250'
            }, {
              name: 'Coding Cat Cafe',
              city: 'Phoenix',
              state: 'AZ',
              cuisines: 'Coffee, Bakery',
              pic: 'http://placekitten.com/250/250'
            }] */}
                {placesFormatted}
            </main>
        </Def>
    )
    }
    
    module.exports = home