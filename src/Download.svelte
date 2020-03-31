<script>
	import {onMount} from 'svelte';
	import Select from 'svelte-select';
	let value = 'currently Selected';
	let options = [{
		value: 'default',
		label: 'English'
	}];
	const optionIdentifier = 'id';
	onMount(() => {
			options.push({
				value: 'AR',
				label: 'Arabic'
			})
	});
	function handleSelect(SelectedValue) {
		value = SelectedValue.detail.value;

	}
</script>

<p >
	{value}
</p>
<Select items={options} on:select={handleSelect}  isClearable={false} {optionIdentifier} placeholder="Looking for another Language?" showChevron={true}></Select>


