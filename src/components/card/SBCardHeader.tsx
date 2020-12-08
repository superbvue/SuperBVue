import { defineComponent, PropType } from 'vue'

interface ISBCardHeaderProps {
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
type TVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

const SBCardHeader = defineComponent({
  name: 'SBCardHeader',
  props: {
    bgVariant: {
      type: String as PropType<TVariant>,
      required: true,
      validator: function (payload: string) {
        return (
          [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'
          ].indexOf(payload) !== -1
        )
      }
    },
    borderVariant: {
      type: String as PropType<TVariant>,
      required: false,
      validator: function (payload: string) {
        return (
          [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'
          ].indexOf(payload) !== -1
        )
      }
    },
    textVariant: {
      type: String as PropType<TVariant>,
      required: false,
      validator: function (payload: string) {
        return (
          [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'
          ].indexOf(payload) !== -1
        )
      }
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
    let computeClass = (props: ISBCardHeaderProps) => {
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
    let computeStyle = (props: ISBCardHeaderProps) => {
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
      <h5 class="card-title">Card title</h5>   
    )
  }
})

export default SBCardHeader
