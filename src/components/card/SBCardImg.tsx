import { defineComponent, PropType } from 'vue'

interface ISBCardImgProps {
  imgSrc: string,
  alt?: string,
  top?: boolean,
  bottom?: boolean,
  start?: boolean,
  left?: boolean,
  end?: boolean,
  right?: boolean,
  height?: string | number,
  width?: string | number,
  [key: string]: any
}

const SBCardImg = defineComponent({
  name: 'SBCardImg',
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    top: {
      type: Boolean,
      required: false
    },
    bottom: {
      type: Boolean,
      required: false
    },
    start: {
      type: Boolean,
      required: false
    },
    left: {
      type: Boolean,
      required: false
    },
    end: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    height: {
      type: String || Number,
      required: false
    },
    width: {
      type: String || Number,
      required: false
    },
    class: {
      type: String,
      required: false
    },
    style: {
      type: String,
      required: false
    }
  },
  render() {
    let computeClass = (props: ISBCardImgProps) => {
      let cardImgPost = 'card-img-top'
      for (let key in props) {
        if (props[key] === true) {
          cardImgPost = `card-img-${key}`
        }
      }
      return [
        cardImgPost
      ]
    }
    let computeStyle = (props: ISBCardImgProps) => {
      console.log('props', props)
      return ''
    }

    // return (
    //   <div>
    //     <h1>MY VERISON</h1>
    //     <h1>REAL</h1>
    //     <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" alt="..." />
    //   </div>
    // )

    return (
      <img src={this.imgSrc} class={computeClass((this as any).$props)} alt={this.alt} style={this.style}/>    
    )
  }
})

export default SBCardImg
