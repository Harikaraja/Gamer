import React from 'react';
//import '../assets/styles/transaction.css';

export default function TransactionHistory(props) {
	console.log("props are: ")
	console.log(props)
  return (
	    
	<ul class="comments-list">
			<li>
			<div class="alignleft">
				<a href="#0"><img src="img/items/item-1.jpg" alt="" /></a>
			</div>
			<small>{props.tdate}</small>
			<h3><a href="#" title="">{props.tid}</a></h3>
			<span class="badge bg-warning text-light">{props.status}</span> | <span><a href="#" class="link-secondary">Cancel</a></span> 
			</li>                                             
    </ul>
	);
}

                            