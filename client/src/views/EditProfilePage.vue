<template>
  <div class="ml-4 mr-4">
    <form>
        <div class="mb-3">
            <label for="idNumber" class="form-label">ID Number</label>
            <input type="text" class="form-control" id="idNumber" required>
        </div>
        <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullName" required>
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" required>
        </div>
        <h2>GENDER</h2>
        <div class="radio">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1"><b>male</b>
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2"><b>female</b>
                </label>
            </div>
        </div>
        <div>
            <label for="dateofbirth">Date Of Birth</label>
            <input type="date" name="dateofbirth" id="dateofbirth" value="2000-01-01">
        </div>
        <button type="submit" class="btn-submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .btn-submit {
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .btn-submit:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
  .radio {
    border-style: solid;
    margin-left: 40%;
    margin-right: 40%;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 10px;
  }
  [type="date"] {
    margin-top: 20px;
    background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
  }
  [type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  [type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

    /* custom styles */
    label {
      display: block;
    }
    input {
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      background-color: #fff;
      padding: 3px 5px;
      box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
      width: 190px;
    }
</style>
