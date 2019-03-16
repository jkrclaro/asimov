import React from 'react';


class Blogs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            blogs: [
                {'title': 'Am I too old/young to attend?', 'message': "There is no age limit in attending this programme. With nearly 20 years experience in looking after clients Karen is in a unique position to cater for all age groups."},
                {'title': 'Customer #2', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere."},
                {'title': 'Customer #3', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere."},
            ],
            collapsibles: []
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
                <div className='row'>
                    {this.state.blogs.map((blog, blogIndex) => (
                        <div className='col-lg-4'>
                            <div className='card' key={blogIndex}>
                                <div className='card-body'>
                                    {blog.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Blogs;