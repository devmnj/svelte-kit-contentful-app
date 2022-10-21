<script>
import { format } from "date-fns"
export let dateString="1/11/1979";
console.log(new Date(dateString));
</script>
 
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
 
 
