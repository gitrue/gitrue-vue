<script>
export default {
  created() {},
  name: "SvgAvatar",
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  render(h) {
    // power by https://github.com/luciorubeens/pictogrify
    let avatar = new Pictogrify(this.name).svg;
    return h("svg", {
      class: `svg-avatar-${this.name}`,
      domProps: {
        innerHTML: avatar
      }
    });
  },
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>
