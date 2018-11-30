<template>
  <div>
    <div :style="{ width: size, height: size }" class="placeholder"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    size: {
        type: String,
        default: '200px'
      },
      split:{
        type: Number,
        default: 5
      },
      src:{
        type: String,
        required: true
      }
  },
  mounted() {
    var component = this;
    var options = {
      containerName: 'placeholder',
      rows: this.split,
      columns: this.split,
      margin: 0.4,
      animTime: 0.3
    }

    function ImageGrid(defaults) {
      var r = defaults.rows
      var c = defaults.columns
      var margin = defaults.margin

      var placeholder = document.getElementsByClassName(
        defaults.containerName
      )[0]
      var container = document.createElement('div')
      container.className = 'gridContainer'
      placeholder.appendChild(container)

      var gridTile

      var w = container.offsetWidth / c - margin
      var h = container.offsetHeight / r - margin
      var arr = []

      for (var i = 0, l = r * c; i < l; i++) {
        gridTile = document.createElement('div')
        gridTile.className = 'gridTile'

        arr = [
          (w + margin) * (i % c),
          (h + margin) * Math.floor(i / c),
          (w + margin) * (i % c) + w - margin,
          (h + margin) * Math.floor(i / c),
          (w + margin) * (i % c) + w - margin,
          (h + margin) * Math.floor(i / c) + h - margin,
          (w + margin) * (i % c),
          (h + margin) * Math.floor(i / c) + h - margin
        ]

        gridTile.style.webkitClipPath =
          'polygon(' +
          arr[0] +
          'px ' +
          arr[1] +
          'px,' +
          arr[2] +
          'px ' +
          arr[3] +
          'px, ' +
          arr[4] +
          'px ' +
          arr[5] +
          'px, ' +
          arr[6] +
          'px ' +
          arr[7] +
          'px)'

        gridTile.style.clipPath =
          'polygon(' +
          arr[0] +
          'px ' +
          arr[1] +
          'px,' +
          arr[2] +
          'px ' +
          arr[3] +
          'px, ' +
          arr[4] +
          'px ' +
          arr[5] +
          'px, ' +
          arr[6] +
          'px ' +
          arr[7] +
          'px)'

        container.appendChild(gridTile)

        fixTilePosition(gridTile, i)
      }

      function fixTilePosition(tile, ind) {
        var centr, centrCol, centrRow, offsetW, offsetH, left, top

        centr = Math.floor((c * r) / 2)
        centrCol = Math.ceil(centr / c)
        centrRow = Math.ceil(centr / r)

        offsetW = w / centrCol
        offsetH = h / centrRow

        left = Math.round(((ind % c) - centrCol + 1) * offsetW)
        top = Math.round((Math.floor(ind / c) - centrRow + 1) * offsetH)

        tile.style.backgroundPosition = left + 'px ' + top + 'px'
        tile.style.backgroundImage = `url(${component.src})`
      }
    }

    ImageGrid(options)
  }
}
</script>
<style lang="scss" scoped>
body {
  background-color: #1a1919;
  text-align: center;
}

.placeholder {
  display: inline-block;
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 100px;
}

.placeholder:hover /deep/ .gridTile {
  background-position: 0px 0px !important;
}

.placeholder /deep/ .gridContainer {
  width: 100%;
  height: 100%;
}

.placeholder /deep/ .gridTile {
  // background-image: url(https://unsplash.it/g/1024/768?image=874);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: center;
  transition: background-position 0.3s;
}
</style>

