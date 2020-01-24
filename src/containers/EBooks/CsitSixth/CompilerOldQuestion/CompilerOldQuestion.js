import React,{Component} from 'react'
import Left from './Left/Left'
import css from './CompilerOldQuestion.css'
class CompilerOldQuestion extends Component{
	render(){
		return(
		<div className={css.Old}>
			<div className={css.Left}>
					<Left/>
			</div>
			<div className={css.Right}>
			<iframe src="https://firebasestorage.googleapis.com/v0/b/bookstore-12c74.appspot.com/o/EBOOKS%2FCSIT%2FSIXTH%2FCOMPILER%2FOLD%20QUESTIONS%2FCompiler-2068.pdf?alt=media&token=1913222a-6389-4a22-8a55-3d6fb39fcd19" width="100%" height="500px">
 		   </iframe>

			</div>
		</div>
		)
	}
}
export default CompilerOldQuestion