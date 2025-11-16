<script setup></script>

<template>
  <div>
    <div id="skills" class="container flex">
      <div class="py-14">
        <h2 class="text-red xs:text-2xl md:text-3xl uppercase">My Skills</h2>

        <div class="flex">
          <div>
            <h3 class="uppercase py-4 text-xl">Languages</h3>

            <div class="languages flex flex-wrap md:gap-14">
              <div class="xs:pr-6 xs:pb-6">
                <img src="/images/skills/html-5.png" alt="html-5" />
                <span class="ml-1">HTML 5</span>
              </div>
              <div class="xs:px-6 xs:pb-6">
                <img src="/images/skills/css-3.png" alt="css-3" />
                <span class="ml-2.5">CSS 3</span>
              </div>
              <div class="xs:pr-6 xs:pb-6">
                <img src="/images/skills/sass.png" alt="sass" />
                <span class="ml-2">SASS</span>
              </div>
              <div class="xs:pl-6 xs:pb-6">
                <img class="ml-2" src="/images/skills/js.png" alt="js" />
                <span>JavaScript</span>
              </div>
              <div class="xs:pr-6 xs:pb-6">
                <img class="md:ml-2" src="/images/skills/typescript.png" alt="typescript" />
                <span>TypeScript</span>
              </div>
              <div class="xs:pl-3">
                <img src="/images/skills/php.png" alt="php" />
                <span class="ml-3.5">PHP</span>
              </div>
              <div>
                <img src="/images/skills/csharp.png" alt="csharp" />
                <span class="ml-5">C#</span>
              </div>
            </div>
          </div>
        </div>

        <div class="frameworks md:my-12 flex">
          <div>
            <h3 class="uppercase py-4 text-xl">Frameworks & Libraries</h3>

            <div class="flex flex-wrap md:gap-14 ">
              <div class="xs:pr-6 pb-6">
                <img src="/images/skills/laravel.png" alt="laravel" />
                <span>Laravel</span>
              </div>
              <div>
                <img src="/images/skills/react.png" alt="vue" />
                <span class="ml-2">React</span>
              </div>
              <div>
                <img src="/images/skills/redux.png" alt="vue" />
                <span class="ml-2">Redux</span>
              </div>
              <div>
                <img src="/images/skills/asp.png" alt="asp" class="ml-5" />
                <span>ASP .NET Core</span>
              </div>
              <div class="xs:pb-6">
                <img class="md:ml-3" src="/images/skills/tailwind.png" alt="tailwind" />
                <span>Tailwind CSS</span>
              </div>
              <div class="xs:pl-9">
                <img src="/images/skills/jquery.png" alt="jquery" />
                <span class="ml-1">jQuery</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="databases">
            <h3 class="uppercase py-4 text-xl">Databases</h3>

            <div class="flex flex-wrap">
              <div>
                <img src="/images/skills/mysql.png" alt="mysql" />
                <span class="ml-3">MySQL</span>
              </div>
              <div class="ml-14">
                <img src="/images/skills/sql_server.png" alt="sql_server" />
                <span class="">SQL Server</span>
              </div>
            </div>
          </div>
          <div class="other md:ml-48 xs:ml-16">
            <h3 class="uppercase py-4 text-xl">Other</h3>

            <div class="flex flex-wrap">
              <div>
                <img src="/images/skills/git.png" alt="git" />
                <span class="ml-4">GIT</span>
              </div>
              <div class="ml-14">
                <img src="/images/skills/postman.png" alt="postman" />
                <span class="">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 60px;
  height: 60px;
}

.text-xl {
  color: #fa541c;
}

.languages span,
.frameworks span,
.databases span,
.other span {
  color: gray;
  font-weight: bold;
}
</style>
