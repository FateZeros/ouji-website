<script>
import API from '@/apis'

export default {
  name: 'contact-form',

  data() {
    return {
      formName: '',
      formPhone: '',
      formEmail: '',
      formContent: ''
    }
  },

  methods: {
    checkFormInfo(info) {
      if (!info.name) {
        alert('1')
        return false
      }
      if (!info.phone) {
        alert('2')
        return false
      }
      if (!info.email) {
        alert('3')
        return false
      }
      if (!info.content) {
        alert('4')
        return false
      }
      return true
    },

    handleSubmitForm() {
      const postData = {
        name: this.formName,
        phone: this.formPhone,
        email: this.formEmail,
        content: this.formContent
      }
      const isValid = this.checkFormInfo(postData)
      if (isValid) {
        API.sendEmail(postData)
          .then(res => {
            if (res.status === 200) {
              console.log('提交成功')
            } else {
              console.log('提交失败')
            }
          })
          .catch(() => {
            console.log('提交失败')
          })
      }
    }
  },

  render() {
    return (
      <div class="contact-form-wrap">
        <div class="form-title">{this.$t('contactForm.title')}</div>
        <div class="form-row">
          <div class="form-row-label">{this.$t('app.name')}:</div>
          <input
            v-model={this.formName}
            maxLength={20}
            autocomplete="off"
            class="form-row-input"
            type="text"
          />
        </div>
        <div class="form-row">
          <div class="form-row-label">{this.$t('app.phone')}:</div>
          <input
            v-model={this.formPhone}
            maxLength={20}
            autocomplete="off"
            class="form-row-input"
            type="text"
          />
        </div>
        <div class="form-row">
          <div class="form-row-label">{this.$t('app.email')}:</div>
          <input
            v-model={this.formEmail}
            maxLength={20}
            autocomplete="off"
            class="form-row-input"
            type="text"
          />
        </div>
        <div class="form-row">
          <div class="form-row-label">
            {this.$t('contactForm.queryContent')}:
          </div>
          <input
            v-model={this.formContent}
            maxLength={100}
            autocomplete="off"
            class="form-row-input"
            type="text"
          />
        </div>
        <div class="form-row">
          <div class="form-submit-btn" onClick={() => this.handleSubmitForm()}>
            {this.$t('contactForm.contactBtn')}
          </div>
        </div>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.contact-form-wrap {
  width: 100%;
  height: 360px;
  background: #e0e0e0;
  box-sizing: border-box;
  padding: 0 20%;

  .form-title {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 30px;
  }

  .form-row {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;

    .form-row-label {
      width: 200px;
      height: 100%;
      position: relative;
      padding-left: 16px;
      box-sizing: border-box;

      &::before {
        content: '*';
        width: 10px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        color: red;
      }
    }

    input {
      width: 100%;
      height: 30px;
      margin-top: 10px;
      border-radius: 5px;
      padding: 0 12px;
    }
  }

  .form-submit-btn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    margin: 12px auto 0 auto;
    border-radius: 15px;
    background: $fontColor;
    color: #fff;
  }
}
</style>
