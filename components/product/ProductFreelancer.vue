<template>
  <div>
    <div class="productContainer">
      <el-row style="margin-bottom:100px;border:none;">
        <el-col class="Title">
          <h1>프리랜서 대출</h1>
        </el-col>
        <el-col class="explanation"><span>생활비나 학원비로 자금이 필요한 취업준비중인 고객 및 청년을 위한 맞춤상품</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>대상</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span>만 19세~35세 이하의 취업자금 및 생활자금이 필요하신분</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>한도</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span>~ 2500만원 대출가능 (무소득자 제외)</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>기간</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span>최장 5년까지 취급 수수료 없음.</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>금리</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span> 연 ~ 24% 이내(연체금리 :대출금리의 최대 24%넘지않음)</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>상환 방식</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span>(매월) 만기일시상환 및 원리금 균등상환</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>구비 서류</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span>주민등록증사본,주민등록초본(최근1주일이내),통장사본,<br />최종학력증명서,주거래통장 3개월 입출금거래내역</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>지급 방식</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span>대출 완료시 고객 본인이 지정한 본인 계좌로 입금</span></el-col>
      </el-row>
      <el-row>
        <el-col class="firstText" :sm="4">
          <h3>신청 시간</h3>
        </el-col>
        <el-col class="secondText" :sm="20"><span>24시간 / 365일 가능</span></el-col>
      </el-row>
      <el-row>
        <el-col style="margin-top:10px;">
          <h4>※중요:모든 서류에는 주민번호 뒷자리가 않보이게 첨부(예:123456-1******)</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :sm="6">
          <el-input style="padding-right:10px;">
            <template slot="prepend">이름</template>
          </el-input>
        </el-col>
        <el-col :sm="10">
          <el-input>
            <template slot="prepend">연락처</template>
          </el-input>
        </el-col>
        <el-col :sm="8" style="padding-left:10px;">
          <el-input>
            <template slot="prepend">신청금액</template>
            <template slot="append">만원</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <div style="text-align:center;">
          <el-col>
            <el-button style="width:100%;" type="success">신청하기</el-button>
          </el-col>
        </div>
      </el-row>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.productContainer {
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  padding-top: 70px;
  .el-row > div {
    margin-bottom: 15px;
  }
  .el-row {
    height: 30px;
    border-radius: 5px;
    .Title h1 {
      text-shadow: rgba(255, 255, 255, 0.8) 1px 1px 3px,
        rgba(0, 0, 0, 0.4) 2px 2px 8px;
    }
    .explanation {
      padding-left: 10px;
      span {
        font-size: 1rem;
        color: rgba(220, 220, 220, 1);
        background-color: rgba(0, 0, 0, 0.6);
        font-weight: 500;
      }
    }

    .firstText {
      line-height: 30px;
      background-color: #2e2f30;
      border-radius: 5px;
      text-align: center;
      h3 {
        margin-bottom: 0;
        color: white;
      }
    }
    .secondText {
      line-height: 30px;
      background-color: #eee;
      border-radius: 5px;
      padding: 0px 30px;
      span {
        text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px;
      }
    }
  }
}
</style>
