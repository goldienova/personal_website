import React from 'react'


export default class StickyHeader extends React.Component {

    componentDidMount() {
        // ReactDOM.findDOMNode()
        // const list = ReactDOM.findDOMNode(this.refs.list)
        // list.addEventListener('scroll', this.handleScroll);
       window.addEventListener('scroll', this.handleScroll, true);
     }

     componentWillUnmount() {
       window.removeEventListener('scroll', this.handleScroll);
     }

     handleScroll(event) {
        if (document.body.scrollTop > 38 || document.documentElement.scrollTop > 38) {
          document.getElementById("banner").className = "fixed";
          document.getElementById("projects").className = "with-fixed-banner"
        } else {
          document.getElementById("banner").className = "scrollable";
          document.getElementById("projects").className = "with-scrollable-banner"
        }
      }

    render() {
        return (
         <h1 id="banner" className="scrollable"> PROJECTS </h1>
        )
    }
}
