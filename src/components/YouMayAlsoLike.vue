<template>
  <div class="row">
    <template v-for="(slice) in fields">
      <template v-if="slice.slice_type === 'list_of_articles'">
        <div
          class="col-md-4 animated pulse bounce"
          v-for="(item, index) in slice.items"
          :key="'project-' + index"
        >
          <div class="card mb-4 shadow p-3 mb-5 bg-white rounded">
            <img
              class="bd-placeholder-img card-img-top"
              :src="item.article_cover.url"
              :alt="item.article_cover.alt"
            />
            <div class="card-body">
              <a :href="'/project/' + item.article_to_link.uid">
                <center>
                  <h5 class="card-title">{{ item.article_description[0].text }}</h5>
                </center>
              </a>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "YouMayAlsoLike",
  props: ["fields"]
};
</script>