import React from 'react';


class FAQs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            faqs: [
                {'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo enim, rhoncus ac cursus vitae, tempus nec lacus. Mauris posuere amet.', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo enim, rhoncus ac cursus vitae, tempus nec lacus. Mauris posuere amet."},
                {'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo enim, rhoncus ac cursus vitae, tempus nec lacus. Mauris posuere amet.', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere."},
                {'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo enim, rhoncus ac cursus vitae, tempus nec lacus. Mauris posuere amet.', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere."},
            ]
        }
        this.updatePredicate = this.updatePredicate.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
        window.scrollTo(0 ,0);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 992 });
    };

    toggle(event) {
        let button = document.getElementById(event.target.name);
        button.toggleAttribute('active');
        let content = button.nextSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }
    }

    render() {
        return (
            <div className='container'>
                {this.state.faqs.map((faq, faqIndex) => (
                    <div className='mb-3' key={faqIndex}>
                        <button className="collapsible" id={`collapsible${faqIndex}`} name={`collapsible${faqIndex}`} value={`collapsible${faqIndex}`} onClick={this.toggle}>{faq.title}</button>
                        <div className="content">
                            <p className='mt-3'>{faq.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default FAQs;