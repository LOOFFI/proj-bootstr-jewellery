import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  
} from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1522004847837-8cdfe21d196d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=438ec632fe3d459f9f070fa18956f9a8&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://images.unsplash.com/photo-1518370265276-f22b706aeac8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d012664f2223a2b756a827176826e484&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://images.unsplash.com/photo-1518953789413-9598f0909795?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e5bed9c941a1827db15591dd72ea0fe&auto=format&fit=crop&w=500&q=60',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];



class Carousel3 extends Component {
  
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="w-100" src={item.src} alt={item.altText}/>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (

      <Carousel
        className="mr-5 ml-5 mt-5"    
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      
    );
  }
}


export default Carousel3;
