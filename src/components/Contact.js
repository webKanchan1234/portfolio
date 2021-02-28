import React from 'react'

const Contact = () => {
    return (
        <>
        <div className="my-5" id="contact">
            <h1 className="text-center">Contact us</h1>
        </div>
        <div className="container contact jumbotron ">
        <div className="">
            <form className="">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name"/>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="mobile">Mobile</label>
                <input type="text" class="form-control" id="mobile" placeholder=""/>
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" id="subject" placeholder=""/>
            </div>
            <div class="form-group">
             <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>

        </>
    )
}

export default Contact;
