import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import css from './CsitSixth.css'
class CsitSixth extends Component{
	state={
		subjects:[{name:'Compiler Design',Branch1:{label:'old Question',value:"/compiler-OldQuestion"},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Real Time System',Branch1:{label:'old Question',value:'/RTS-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Net Centric Computing',Branch1:{label:'old Question',value:'/NCC-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Software Engineering',Branch1:{label:'old Question',value:'/SE-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
			{name:'Web Technologies',Branch1:{label:'old Question',value:'/WT-oldQuestions'},Branch2:{label:'Past Question',value:'www.fb.com'}},
		]
	}
	render(){

		return(
			<div className={css.CsitSixth}>
				{this.state.subjects.map(item=>{

					return(
						<div>
						<div className={css.Subject}><strong>{item.name}</strong>
								<Link className={css.Link} 
								to={item.Branch1.value}>
									<div className={css.Items}>
										{item.Branch1.label}
									</div>
								</Link>
								<a className={css.Link} 
								href={item.Branch1.value}
								 target='_blank'>
								<div className={css.Items}>
								{item.Branch2.label}
								</div>
								</a>
								</div>
						</div>
						)
			})}				
				
			</div>
			);
	}
}
export default CsitSixth