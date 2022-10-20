<script>
  import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>
<div class="lg:w-0 lg:flex-1">
    <a href="/" class="flex items-center">
      <img
         src="https://codehat.vercel.app/_nuxt/img/logo2.a95b50e.png"
        alt="My Travel Blog"
        title="My Travel Blog"
        class="h-14 sm:h-20 w-auto z-50"
      />
      <p   class="font-bold text-4xl text-secondary-500 ml-3 mt-2">
       {PUBLIC_SITE_NAME || "CodeHat" }
      </p></a
    >
  </div>