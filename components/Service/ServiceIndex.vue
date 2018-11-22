<template>
  <div class="container">
    <h1>자주 하는 질문</h1>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="직장없고 신용불량자에 담보뿐인데, 대출진행이 가능할까요?" name="1">
        <div class="textContent">
          직장이나 신용조회 자체를 하지 않고 대출실행 될수 있습니다.

          그런데 신용등급과 소득,연체여부에 따라

          대출금리가 변경될 수 있습니다.

          걱정하지 마시고 상담 받으셔서

          고객님이 원하시는 상품으로 결정하시면 됩니다.</div>
      </el-collapse-item>
      <el-collapse-item title="다른곳에서 거절을 당했는데 가능할까요?" name="2">
        <div class="textContent">
          가능할 수 있습니다.

          많은 분들이 안되실거라고 예상하시고는 현재 저희가 진행한 상품을 이용하시고 계시는 고객분들이 많이 계십니다.

          따라서 안되실거라 생각하지 마시고 편하게 상담 신청해주시기 바랍니다
        </div>
      </el-collapse-item>
      <el-collapse-item title="기존 대출이 있는데 이자가 너무 비싸요 싼 이자로 갈아탈 수 있나요?" name="3">
        <div class="textContent">
          네 확답은 어렵지만 가능할 수 있습니다.

          대부업체도 업체별로 운용하는 금리가 담보의 가치별로 틀리기 때문에 저희 상담원을 통해

          상담하시면 쉽고 빠르게 고객님의 입장에서 도와 드립니다</div>
      </el-collapse-item>
      <el-collapse-item title="대부업은 이자가 비싼 편인데 나중에 저금리 갈아타기 상품도 있나요?" name="4">
        <div class="textContent">
          네 가능합니다.

          대출상품별 금리 차이가 있기 때문에

          고객님의 희망하시는데로

          저금리 갈아타기 상품의 안내가 가능합니다.</div>
      </el-collapse-item>
      <el-collapse-item title="대출의뢰하면 언제 답변을 받을 수 있을까요?" name="5">
        <div class="textContent">
          아파트/ 빌라/주택/(후순위/추가대출포함)등 주거용 주택일 경우 20분 안에 결과가 도출되며,

          ​그 외 땅이나 상가 같은 경우에는 감정하는데 시간이 좀 더 소요되나,

          ​늦어도 1시간 안에 답변 해 드릴 수 있습니다
        </div>
      </el-collapse-item>
      <el-collapse-item title="대부업체 믿을만한가요?무서운 곳 아닐까 걱정돼요" name=6>
        <div class="textContent">
          이런류의 질문을 받을때

          대략 난감합니다.

          대부업법에 의해 정식으로 등록된 업체이며,

          홈페이지 하단에 게재된

          대부업, 중개업 등록번호를 확인하시면 됩니다.

          저희는 허가 등록된 업체로서 대한민국 법을 준수하며,

          ​높은 이자나 불법추심 등

          불법행위는 일체 하지 않으니

          안심하고 이용하시기 바랍니다
        </div>
      </el-collapse-item>
      <el-collapse-item title="직장 때문에 바쁜데 업체에 꼭 방문해야하나요?" name=7>
        <div class="textContent">
          방문 없이 당일 대출 중개 진행 도와드릴 수 있습니다.

          걱정 하지 마시고 편히 상담 주시기 바랍니다.
        </div>
      </el-collapse-item>
      <el-collapse-item title="신용조회 하나요?" name=8>
        <div class="textContent">
          신용조회를 하는 상품과

          신용조회를 하지 않는 상품이 있습니다.

          따라서 고객님께서 신용조회를 원치 않으시면

          신용조회 없이 대출을 진행하는 상품으로

          도와드립니다.

          그리고 그 상품은 ​

          ​신용불량, 연체 등 그 어떤 것도 상관하지 않습니다
        </div>
      </el-collapse-item>
      <el-collapse-item title="소득이 일정치 않은데 대출진행이 가능할까요?" name=9>
        <div class="textContent">
          다양한 고객분들이 계시듯이..

          저희도 다양한 상품을 보유하고 진행 도와드립니다.

          걱정 하지 마시고 상담 신청해주시기 바랍니다.
        </div>
      </el-collapse-item>
      <el-collapse-item title="신탁담보대출[신탁대출]이 뭔가요?" name=10>
        <div class="textContent">
          네 신탁대출은 현재 주거용인 아파트/빌라/주택/오피스텔(후순위/추가)등에 대출을

          실행하면서 보통의 금융권에서 대출을 취급할 때

          소유권이외의 권리인 부동산등기부 을구에 근저당권설정을 하는

          방식으로 담보를 취득합니다.

          그런데 근저당권설정으로 담보를 취득하면

          소액임차인의 권리침해에 대비할 수 없어,

          ​방 갯수만큼 소액임차인의 최우선변제금액을 공제하고 대출하게 되므로,

          ​시세대비 한도를 많이 받을 수 없습니다,.

          ​그런데 신탁담보대출로 하면 부동산등기부 갑구에 소유권을

          신탁법에 의하여 설립된 신탁전문회사로 등기하는 방식으로 처리하여

          방 갯수 만큼의 최우선 변제금을 공제하지 않고 대출을 하기에 시세대비

          대출 한도를 근저당권설정의 방식보다 많이 받을 수 있는 장점이 있습니다.

          그리고 고객님께서 대출을 상환하시면 근저당권말소와

          동일하게 신탁등기도 말소되어 고객님의 재산에는 아무런 영향이 없답니다.
        </div>
      </el-collapse-item>
      <el-collapse-item title="담보가 공동지분으로 되어있는데 제 명의로만 대출이 가능할까요?" name=11>
        <div class="textContent">
          충분히 가능합니다.

          간혹 금융권에서는 공유지분의 50%가 되지 않으면

          대출을 취급하지 않지만

          50%가 되지 않는 공유지분도 대출 취급이 가능합니다

          공유지분도 부동산에 대한 소유권이기 때문입니다.

          단, 대출한도는 전체를 담보로 제공하는 것보다 비율이 적게

          산정 될 수 있습니다.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import ServiceQuestionAnswer from '@/components/Service/ServiceQuestionAnswer.vue'
export default {
  data() {
    return {
      activeName: '1'
    }
  },
  components: { ServiceQuestionAnswer }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 50px;
  > h1 {
    font-weight: 500;
    border-bottom: 1px solid black;
    margin-bottom: 50px;
  }
  .el-collapse {
    & /deep/ .el-collapse-item__header {
      height: 96px;
    }
    .textContent {
      color: #999;
    }
  }
}
</style>