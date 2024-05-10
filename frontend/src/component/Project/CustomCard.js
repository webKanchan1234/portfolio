import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Link, Navigate } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';


const CustomCard = ({props}) => {
    return (
        <div>
            <Card className='card'>
                <Card.Img className='card-image' variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>
                        <div className="flex">
                            <p>{props.title}</p>
                            <div >
                                <Link id='link' to={props.github} target="_blank"><GitHubIcon id="icon"/></Link>
                                <Link id='link' to={props.url} target="_blank"><LanguageIcon id="icon"/></Link>
                            </div>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default CustomCard