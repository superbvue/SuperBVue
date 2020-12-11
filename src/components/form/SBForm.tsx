import { defineComponent, PropType } from 'vue'

interface ISBFormProps {
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

const SBForm = defineComponent({
  name: 'SBForm',
  props: {
    imgSrc: {
      type: String,
      required: false
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
    let computeClass = (props: ISBFormProps) => {
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
    let computeStyle = (props: ISBFormProps) => {
      console.log('props', props)
      return ''
    }

    return (
      <div>
        <h1>MY VERISON</h1>
        <h1>REAL</h1>


        <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" >
          <div class="toast-header">
            {/* <img src="..." class="rounded me-2" alt="..."> */}
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    )

    // return (
    //   <img src={this.imgSrc} class={computeClass((this as any).$props)} alt={this.alt} style={this.style}/>    
    // )
  }
})

export default SBForm
