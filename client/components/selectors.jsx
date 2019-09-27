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

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);


    const handleCloseOne = () => setShowOne(false);
    const handleShowOne = () => setShowOne(true);

    const handleCloseTwo = () => setShowTwo(false);
    const handleShowTwo = () => setShowTwo(true);

    const handleMonthChange = () => {
        let month = event.target.innerText;
        props.changeMonth(month);
    }

    const findHabitChartData = () => {
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

    const findMonthlyChartData = () => {
        let months = {};

        props.allTransactions.forEach(expense => {
            if (expense.category !== 'Deposit') {
                if (!months[expense.month]) {
                    months[expense.month] = expense.amount;
                } else {
                    months[expense.month] += expense.amount;
                }
            }
        });

        return months;
    }

    const generateChart = (type) => {
        if (type === 'habits'){
            let summary = findHabitChartData();
            let categories = [], sums = [];
    
            for (let key in summary) {
                categories.push(key);
                sums.push(summary[key]);
            }
    
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
        } else {
            if (type === 'monthly'){
                let summary = findMonthlyChartData();
                let months = [], sums = [];
        
                for (let key in summary) {
                    months.push(key);
                    sums.push(summary[key]);
                }
        
                let ctx = document.getElementById('monthly');
                let monthlyChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: months,
                        datasets: [{
                            label: `Monthly Expenditures`,
                            data: sums,
                            fill: false,
                            borderColor: 'rgba(250, 0, 0, .6)'
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        }
                    }
                });
            }
        }    
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
                <Button id="addBtn" variant="light" onClick={handleShowOne}>Category Breakdown</Button>
                </Col>
                <Col md="auto">
                <Button id="addBtn" variant="light" onClick={handleShowTwo}>Monthly Breakdown</Button>
                </Col>
            </Row>
        </Container>

        <Modal onShow={() => generateChart('habits')} show={showOne} onHide={handleCloseOne} animation={false}>
            <Modal.Body>
                <canvas id="habits" width="500" height="500"></canvas>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseOne}>
                Close
            </Button>
            </Modal.Footer>
         </Modal>

         <Modal onShow={() => generateChart('monthly')} show={showTwo} onHide={handleCloseTwo} animation={false}>
            <Modal.Body>
                <canvas id="monthly" width="500" height="500"></canvas>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseTwo}>
                Close
            </Button>
            </Modal.Footer>
         </Modal>
         </>
    );
}

export default Selectors;