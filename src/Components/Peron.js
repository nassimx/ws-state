import React, { Component } from 'react';

class Person extends Component {
    state = {
        Person: {
            fullName: `Nassim Frikha`,
            bio: `My name is Nassim. I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript.`,
            imgSrc: "https://raw.githubusercontent.com/nassimx/reactcomp/main/src/Components/Profile/ProfilePic.png",
            profession: `Web Developer`
        },
        show: true
    };
    render() {
        return (
            <>
                {this.state.show && (
                    <>
                        <h1>{this.state.Person.fullName}</h1>
                        <h1>{this.state.Person.bio}</h1>
                        <img src={this.state.Person.imgSrc} alt="Person" />
                        <h1>{this.state.Person.profession}</h1>
                        <br></br>
                    </>
                )}

            </>
        );
    }
}
export default Person;
