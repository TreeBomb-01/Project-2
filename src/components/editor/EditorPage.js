// components/editor/EditorPage.js
import { request } from '../../utils/api.js'
import Editor from './Editor.js'

export default function EditorPage({ $target, initialState }) {
    const $page = document.createElement('div')
    $page.className = 'editorPage'

    this.state = initialState

    $target.appendChild($page)

    const onEditing = (id) => {
        // id가 undefined일 수도 있으니 처리 필요
        if (this.state.parent == 'new') {
            // 새로운 문서 생성
            request('', {
                method: 'POST',
                body: JSON.stringify({
                    title: '',
                    content: '',
                }),
            })
        } else if (id) {
            // 기존 문서 수정
            request(`/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: '수정문서',
                    content: '내용 수정',
                }),
            })
        } else {
            console.log('No id provided for editing, and parent is not new.')
        }
    }

    new Editor({ $target: $page, initialState, onEditing })
}
