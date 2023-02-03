// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export function genRandomTree(N = 300, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map(i => ({ id: i })),
        links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
      }))
    };
  }

export function nodePaint({ id, x, y }, color, ctx) {
    ctx.fillStyle = color;
    [
      () => { ctx.fillRect(x - 6, y - 4, 12, 8); }, // rectangle
      () => { ctx.beginPath(); ctx.moveTo(x, y - 5); ctx.lineTo(x - 5, y + 5); ctx.lineTo(x + 5, y + 5); ctx.fill(); }, // triangle
      () => { ctx.beginPath(); ctx.arc(x, y, 5, 0, 2 * Math.PI, false); ctx.fill(); }, // circle
      () => { ctx.font = '10px Sans-Serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('Text', x, y); } // text
    ][id%4]();
  }

  // gen a number persistent color from around the palette
export const getColor = n => '#' + ((n * 1234567) % Math.pow(2, 24)).toString(16).padStart(6, '0');
