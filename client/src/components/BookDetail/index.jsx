import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
BookDetail.propTypes = {
    
};

function BookDetail(props) {
    return (
        <Card bg="info" text="white" className="shadow">
            <Card.Body>
                <Card.Title>
                    Ky nghe lay tay 
                </Card.Title>
                <Card.Subtitle>
                    Phong su
                </Card.Subtitle>
                    <p>VTP</p>
                    <p>90</p>
                    <p>All book by this author</p>
                    <ul>
                        <li>KNLT</li>
                        <li>So do</li>
                    </ul>
            </Card.Body>
        </Card>
    );
}

export default BookDetail;