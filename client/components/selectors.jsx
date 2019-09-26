import React, { useState } from 'react';
import Chart from 'chart.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Selectors = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const handleMonthChange = () => {
        let month = event.target.innerText;
        props.changeMonth(month);
    }

    const findChartData = () => {
        let cats = {};

        props.transactions.forEach(expense => {
            if (expense.category !== 'Deposit') {
                if (!cats[expense.category]) {
                    cats[expense.category] = expense.amount;
                } else {
                    cats[expense.category] += expense.amount;
                }
            }
        });

        return cats;
    }

    const generateChart = () => {
        let summary = findChartData();
        let categories = [], sums = [];

        for (let key in summary) {
            categories.push(key);
            sums.push(summary[key]);
        }

        console.log('hello')
        console.log(sums)

        let ctx = document.getElementById('habits');
        let data = {
            datasets: [{
                data: sums,
                backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
            }],
            labels: categories
        }; 
        let habitsChart = new Chart(ctx, {
            type: 'doughnut',
            data: data
        });
    }

    return (
        <>
        <Container id="inputs">
            <Row className="justify-content-md-center">
                <Col md="auto">
                <DropdownButton
                    variant="light"
                    size="small"
                    title="Change Month"
                    id="month-changer"
                    >
                    <Dropdown.Item onSelect={handleMonthChange}>September</Dropdown.Item>
                    <Dropdown.Item onSelect={handleMonthChange}>August</Dropdown.Item>
                    <Dropdown.Item onSelect={handleMonthChange}>July</Dropdown.Item>
                    <Dropdown.Item onSelect={handleMonthChange}>June</Dropdown.Item>
                    <Dropdown.Item onSelect={handleMonthChange}>May</Dropdown.Item>
                 </DropdownButton>

                </Col>
                <Col md="auto">
                <Button id="addBtn" variant="light" onClick={handleShow}>Category Breakdown</Button>
                </Col>
            </Row>
        </Container>

        <Modal onShow={generateChart} show={show} onHide={handleClose} animation={false}>
            <Modal.Body>
                <canvas id="habits" width="500" height="500"></canvas>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
         </Modal>
         </>
    );
}

export default Selectors;