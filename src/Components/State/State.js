import React from 'react'
import AppContext from '../../Context/AppContext'
import USAMap from 'react-usa-map'

export default class State extends React.Component {
    static contextType = AppContext

    mapHandler = () => {
        this.props.history.push('/state/11');
      };

    statesFilling = () => {
      return {
          'AL': {
              fill: 'blue',
              clickHandler: () => this.props.history.push('/state/1') 
          },
          'AK': {
            fill: 'red',
            clickHandler: () => this.props.history.push('/state/2') 
        },
        'AZ': {
            fill: 'orange',
            clickHandler: () => this.props.history.push('/state/4') 
        },
        'AR': {
            fill: 'green',
            clickHandler: () => this.props.history.push('/state/5') 
        },
        'CA': {
            fill: 'turquoise',
            clickHandler: () => this.props.history.push('/state/6') 
        },
        'CO': {
            fill: 'teal',
            clickHandler: () => this.props.history.push('/state/8') 
        },
        'CT': {
            fill: 'yellow',
            clickHandler: () => this.props.history.push('/state/9') 
        },
        'DC2' : {
            fill: 'fuchsia'
        },
        'DE': {
            fill: 'red',
            clickHandler: () => this.props.history.push('/state/10') 
        },
        'FL': {
            fill: 'orange',
            clickHandler: () => this.props.history.push('/state/12') 
        },
        'GA': {
            fill: 'brown',
            clickHandler: () => this.props.history.push('/state/13') 
        },
        'HI': {
            fill: 'rgb(168, 51, 185)',
            clickHandler: () => this.props.history.push('/state/15') 
        },
        'ID': {
            fill: 'purple',
            clickHandler: () => this.props.history.push('/state/16') 
        },
        'IL': {
            fill: 'blue',
            clickHandler: () => this.props.history.push('/state/17') 
        },
        'IN': {
            fill: 'green',
            clickHandler: () => this.props.history.push('/state/18') 
        },
        'IA': {
            fill: 'aqua',
            clickHandler: () => this.props.history.push('/state/19') 
        },
        'KS': {
            fill: 'red',
            clickHandler: () => this.props.history.push('/state/20') 
        },
        'KY': {
            fill: 'coral',
            clickHandler: () => this.props.history.push('/state/21') 
        },
        'LA': {
            fill: 'crimson',
            clickHandler: () => this.props.history.push('/state/22') 
        },
        'ME': {
            fill: 'burlywood',
            clickHandler: () => this.props.history.push('/state/23') 
        },
        'MD': {
            fill: 'rgb(17, 157, 164)',
            clickHandler: () => this.props.history.push('/state/24') 
        },
        'MA': {
            fill: 'darkcyan',
            clickHandler: () => this.props.history.push('/state/25') 
        },
        'MI': {
            fill: 'blueviolet',
            clickHandler: () => this.props.history.push('/state/26') 
        },
        'MN': {
            fill: 'rgba(138, 176, 171)',
            clickHandler: () => this.props.history.push('/state/27') 
        },
        'MS': {
            fill: 'greenyellow',
            clickHandler: () => this.props.history.push('/state/28') 
        },
        'MO': {
            fill: 'indianred',
            clickHandler: () => this.props.history.push('/state/29') 
        },
        'MT': {
            fill: 'lawngreen',
            clickHandler: () => this.props.history.push('/state/30') 
        },
        'NE': {
            fill: 'lightcoral',
            clickHandler: () => this.props.history.push('/state/31') 
        },
        'NV': {
            fill: 'maroon',
            clickHandler: () => this.props.history.push('/state/32') 
        },
        'NH': {
            fill: 'mediumspringgreen',
            clickHandler: () => this.props.history.push('/state/33') 
        },
        'NJ': {
            fill: 'navy',
            clickHandler: () => this.props.history.push('/state/34') 
        },
        'NM': {
            fill: 'olive',
            clickHandler: () => this.props.history.push('/state/35') 
        },
        'NY': {
            fill: 'olivedrab',
            clickHandler: () => this.props.history.push('/state/36') 
        },
        'NC': {
            fill: 'orchid',
            clickHandler: () => this.props.history.push('/state/37') 
        },
        'ND': {
            fill: 'orangered',
            clickHandler: () => this.props.history.push('/state/38') 
        },
        'OH': {
            fill: 'firebrick',
            clickHandler: () => this.props.history.push('/state/39') 
        },
        'OK': {
            fill: 'indigo',
            clickHandler: () => this.props.history.push('/state/40') 
        },
        'OR': {
            fill: 'midnightblue',
            clickHandler: () => this.props.history.push('/state/41') 
        },
        'PA': {
            fill: 'palevioletred',
            clickHandler: () => this.props.history.push('/state/42') 
        },
        'RI': {
            fill: 'fuchsia',
            clickHandler: () => this.props.history.push('/state/44') 
        },
        'SC': {
            fill: 'plum',
            clickHandler: () => this.props.history.push('/state/45') 
        },
        'SD': {
            fill: 'peru',
            clickHandler: () => this.props.history.push('/state/46') 
        },
        'TN': {
            fill: 'rebeccapurple',
            clickHandler: () => this.props.history.push('/state/47') 
        },
        'TX': {
            fill: 'rosybrown',
            clickHandler: () => this.props.history.push('/state/48') 
        },
        'UT': {
            fill: 'sandybrown',
            clickHandler: () => this.props.history.push('/state/49') 
        },
        'VT': {
            fill: 'salmon',
            clickHandler: () => this.props.history.push('/state/50') 
        },
        'VA': {
            fill: 'saddlebrown',
            clickHandler: () => this.props.history.push('/state/51') 
        },
        'WA': {
            fill: 'seagreen',
            clickHandler: () => this.props.history.push('/state/53') 
        },
        'WV': {
            fill: 'rgb(31, 32, 65)',
            clickHandler: () => this.props.history.push('/state/54') 
        },
        'WI': {
            fill: 'rgb(38, 65, 60)',
            clickHandler: () => this.props.history.push('/state/55') 
        },
        'WY': {
            fill: 'steelblue',
            clickHandler: () => this.props.history.push('/state/56') 
        },
      }
    }

    render() {
    
        return(
            <>
            <div className="state-selection">
                <USAMap customize={this.statesFilling()} onClick={this.mapHandler}/>
            </div>
            </>
        )
    }
}