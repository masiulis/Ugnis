import * as React from 'react'
import styled from 'styled-components'
import state from '@state'
import { NodeTypes, RootNode } from '@src/interfaces/nodes'
import { toCamelCase } from '@src/utils'

const ElementsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const removeNode = (node: RootNode) => {
  if (!node.children) return
  const nodeIndex = node.children.indexOf(state.ui.selectedNode)
  if (nodeIndex !== -1) {
    node.children.splice(nodeIndex, 1)
  } else {
    node.children.forEach(removeNode)
  }
}

const deleteComponent = e => {
  const del = e.keyCode === 46
  const backspace = e.keyCode === 8
  const component = state.elements[toCamelCase(state.ui.router[0])].find(elm => elm.id === state.ui.router[1])
  console.log(component)

  if (
    (del || backspace) &&
    state.ui.selectedNode &&
    !state.ui.editingTextNode &&
    state.ui.selectedNode.type !== NodeTypes.Root
  ) {
    removeNode(component.root)
    state.ui.selectedNode = null
    state.ui.stateManager = null
  }
}

class Background extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', deleteComponent)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', deleteComponent)
  }

  render() {
    return <ElementsWrapper>{this.props.children}</ElementsWrapper>
  }
}
export default Background
