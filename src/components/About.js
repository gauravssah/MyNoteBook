// import React, { useContext, useEffect } from 'react'
import React from 'react'


const About = () => {

    return (

        <div className="container my-5">
            <h2 className="mb-4">About Us</h2>
            <p>
                Welcome to MyNotes - your digital notebook and productivity tool. We are dedicated to helping you stay organized, save time, and boost your productivity.
            </p>

            <h3 className="mt-5">Our Mission</h3>
            <p>
                Our mission is to provide a simple and effective platform for you to jot down your thoughts, ideas, to-do lists, and more. We believe that keeping your notes organized and easily accessible is key to achieving your goals.
            </p>

            <h3 className="mt-5">Features</h3>
            <ul>
                <li>Easy-to-use note-taking interface.</li>
                <li>Organize your notes into categories and notebooks.</li>
                <li>Search functionality to quickly find what you need.</li>
                <li>Access your notes from anywhere, on any device.</li>
                <li>Secure your data with our advanced encryption.</li>
            </ul>

            <h3 className="mt-5">Connect with Us</h3>
            <p>
                Stay updated with the latest developments and connect with us on GitHub:
            </p>

            <ul>
                <li>Explore our code on <a href="https://github.com/gauravssah/MyNoteBook" target="_blank" rel="noopener noreferrer">GitHub</a>.</li>
                <li>Follow our projects and contributions on <a href="https://github.com/gauravssah" target="_blank" rel="noopener noreferrer">GitHub</a>.</li>
            </ul>

            <h3 className="mt-5">Join Us Today!</h3>
            <p>
                Ready to get started? Sign up for a free account and experience the power of MyNotes for yourself.
            </p>
        </div>


    )
}

export default About
